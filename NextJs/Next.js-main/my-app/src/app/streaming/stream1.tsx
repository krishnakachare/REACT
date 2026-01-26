export const Stream1 = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return <div>Stream1</div>
}