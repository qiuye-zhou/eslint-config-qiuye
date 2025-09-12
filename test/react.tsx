import React from 'react'

interface Props {
    title: string
    count: number
    onClick: () => void
}

const TestComponent = ({ title, count,onClick }: Props) => {
    const [state, setState] = React.useState(0)

    React.useEffect(() => {
        console.log('Component mounted')
        console.log('Current state:', state)
    }, [state])

    const handleClick = () => {
        setState(prev => prev + 1)
        onClick()
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>Count: {count}</p>
            <button onClick={handleClick}>
                Click me
            </button>
            <img src="test.jpg" alt="Test" />
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                External link
            </a>
        </div>
    )
}

export default TestComponent
