import {forwardRef} from "react"

export const DivSpinner = () => <div>Loading...</div>

export const DivContainer = forwardRef(({children}, ref) =>(
    <>
      <div ref={ref} className='fixed top-0 left-0 outline-none' ></div>
      <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]" >Section1</section>

      <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] text-[#ffeded] justify-end" >Section2</section>

      <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]" >Section3</section>

      <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end" >Section4</section>

      <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded]" >Section5</section>
    </>
))

const Loader = () => {
    return (
        <DivContainer>
            <DivSpinner/>
        </DivContainer>
    )
}
export default Loader;