export const Form = () => {
    const count = 1
    const name = 'geekbrains'
    return <form>
        <p>Count: {count}</p>
        <p>Name: {name} </p>
        <input type="text" />
        <button type="button">click</button>
    </form>
}