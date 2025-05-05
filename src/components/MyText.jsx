
export default function MyText()
{
    let x = "**--**";
    function myFn()
    {
        return "ФУНКЦИЯ работает!!!"
    }

    return <>
        <h2>title</h2>
        <p>
            Lorem ipsum dolor {x} Quos esse qui numquam ut {1 + 4} <br/>
            debitis aliquid eveniet blanditiis perferendis, optio saepe
            <br/>
            Статус функции: {myFn()}
            <br/>
            uibusdam provident delectus, dicta porro?
        </p>
    </>
}

//export default MyText