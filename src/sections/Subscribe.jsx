import Button from '../components/Button';
const Subscribe = () => {
  return (
    <section className="max-container flex justify-center items-center max-lg:flex-col gap-10" id="
    contact-us">
      <h3 className="text-4xl leading-[68px] font-palanquin lg:max-w-md font-bold">
        Sign up for
        <span className="text-coral-red"> Updates </span>
        & Newsletter
      </h3>
      <div className="flex justify-center items-center lg:max-w-[40%] w-full flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text" 
          placeholder="subscribe@nike.com" 
          className="input"
          />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth/>
          </div>
      </div>

    </section>
  )
}

export default Subscribe