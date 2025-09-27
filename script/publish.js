const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function publish() {
  try {
    console.log('🔍 检查npm登录状态...');
    try {
      execSync('npm whoami', { stdio: 'pipe' });
      console.log('✅ 已登录npm');
    } catch (error) {
      console.log('❌ 未登录npm，请先运行: npm login');
      process.exit(1);
    }

    console.log('🔍 检查git状态...');
    try {
      const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
      if (gitStatus.trim()) {
        console.log('⚠️  检测到未提交的更改，请先提交更改');
        console.log(gitStatus);
        process.exit(1);
      }
    } catch (error) {
      console.log('⚠️  无法检查git状态，继续发布...');
    }

    // 询问版本号
    const version = await new Promise((resolve) => {
      rl.question('📝 请输入新版本号 (格式: x.y.z): ', (answer) => {
        resolve(answer.trim());
      });
    });

    if (!/^\d+\.\d+\.\d+$/.test(version)) {
      console.log('❌ 版本号格式不正确，应为 x.y.z 格式');
      process.exit(1);
    }

    console.log(`📝 更新版本号到 ${version}...`);
    execSync(`npm version ${version}`, { stdio: 'inherit' });

    console.log('🚀 发布到npm...');
    execSync('npm publish --access=public', { stdio: 'inherit' });

    console.log('✅ 发布成功！');
    console.log(`📦 包名: eslint-config-qiuye"k@${version}`);
    console.log('🌐 查看: https://www.npmjs.com/package/eslint-config-qiuye"k');

  } catch (error) {
    console.error('❌ 发布失败:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

publish();
