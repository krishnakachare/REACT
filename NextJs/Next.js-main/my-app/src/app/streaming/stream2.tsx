export const Stream2 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return <div>Stream2</div>
}