import Image from "next/image";

const Page = () => {
    return (
        <div className='w-screen h-screen overflow-hidden bg-white text-black flex items-center justify-center'>

            <div className='w-1/2 py-8 px-16 font-semibold text-[120px] relative flex flex-col'>
                <div className='flex text-8xl font-bold pt-14'>
                    Structural<br />Health<br />Monitoring<br />System
                </div>
                <div className='h-2 w-3/4 bg-black rounded-3xl my-10' />
                <div className='text-4xl font-light capitalize'>
                    machine learning technique (KNN)
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <Image src={"/ai.png"} width={512} height={512} className="object-cover border-none" alt="ai-im" />

            </div>
        </div>
    )
}

export default Page;
