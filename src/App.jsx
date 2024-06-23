


import elizabeth from './assets/6c7efd980faf690ac1f776536ea7a8e563783ed5-44x44.svg'
import youtube from './assets/download (5).svg'
import joelle from './assets/0d29358673d04d68cdcc03876a22b0fac25494d7-44x44.svg'
import linkedin from './assets/download (1).svg'
import carl from './assets/b51e419ba68b1181ee4e78c4b7c17dc35806ca8c-44x44.svg'
import twitter from './assets/download (2).svg'
import addina from './assets/f6a9e5f53c4fc0d5f8d0125c112768e652adda08-44x44.svg'

import insta from './assets/download (3).svg'
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
// import  from ''
import Card from './components/Card'
function App() {


  return (
    <>
      <div className='mt-24 '>
        <div className='flex flex-col pt-4 mx-auto my-0 gap-[2.5rem] w-[78.75rem] max-w-[calc(100%-10rem)] '>
          <div className='flex flex-col self-start  '>
            <h3 className='text-[2.5rem] leading-[3rem] tracking-[-1px] font-[640]'>What our customers say about us</h3>
          </div>
          <div className="w-full h-[1040px]">
            <div className="flex gap-[1.5rem] h-full ">
              <div className="w-[calc(33.3333%-1rem)] h-full">
                <div className="h-full overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0)0%,rgb(0,0,0)25%,rgb(0,0,0)75%,rgba(0,0,0,0)100%)] ">
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />
                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>



                  </div>
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />
                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>



                  </div>
                </div>
              </div>


              <div className="w-[calc(33.3333%-1rem)] h-full">
                <div className="h-full overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0)0%,rgb(0,0,0)25%,rgb(0,0,0)75%,rgba(0,0,0,0)100%)]">
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />



                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>
                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>

                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />

                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>


                  </div>
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />



                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>
                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>

                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />

                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>


                  </div>
                </div>
              </div>



              <div className="w-[calc(33.3333%-1rem)] h-full">
                <div className="h-full overflow-hidden [mask-image:linear-gradient(rgba(0,0,0,0)0%,rgb(0,0,0)25%,rgb(0,0,0)75%,rgba(0,0,0,0)100%)] ">
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />
                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>


                  </div>
                  <div className="flex flex-col pb-[1.5rem] gap-[1.5rem] animate-scroll">
                    <Card profile={elizabeth} name={'Elizabeth'} mail={'@DesignerUp'} social={youtube} info={`I can't believe I just watched AI turn a boring text prompt into a complete UI design and flow right before my eyes in seconds with Uizard.`} />
                    <Card profile={joelle} name={'Joelle'} mail={'@joelledesigner'} social={linkedin} info={`Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.`} />


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={carl} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Carl</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@carlvellotti</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={twitter} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Uizard isn’t your average AI tool that overpromises and under delivers - it has actually useful features that are designed to speed up your design process.</p>
                          <p className='my-[1rem]'>Design tool + AI = Magic 🪄</p>
                          <p className='my-[1rem]'>🔸 Instantly generate designs from a prompt or screenshot</p>
                          <p className='my-[1rem]'>🔸 Get a predictive heat map of where users will focus</p>
                          <p className='my-[1rem]'>🔸 Powerful design tool on its own</p>
                        </div>
                      </div>
                    </a>


                    <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
                    border-[#212121] rounded-[0.75rem]">
                      <div className="flex items-center gap-[0.75rem] w-full">
                        <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                          <img src={addina} alt="" className="w-full h-auto" />
                        </div>
                        <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                          <div className="flex items-center justify-start">
                            <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">Addina</p>
                          </div>
                          <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">@byaddinaf</p>
                        </div>
                        <div className="flex items-center justify-center">
                          <img src={insta} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                        </div>

                      </div>
                      <div className="flex items-center justify-start w-full">
                        <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                          <p className='my-[1rem]'>Designers, don’t walk, run to uizard @uizard for their new AI feature: Autodesigners 🪄🏃🏻‍♀️💨</p>
                          <p className='my-[1rem]'>Autodesigner is their AI feature to generate design by text prompt! 🤯 I got a full access to try this feature myself! ⚡️🥰</p>
                          <p className='my-[1rem]'>✏️ Choose the device</p>
                          <p className='my-[1rem]'>👀 Choose the design style</p>
                          <p className='my-[1rem]'>⚡️ Generate</p>
                          <p className='my-[1rem]'>🪄 Like magic it’s ready for you</p>
                          <p className='my-[1rem]'>🤯 … and the component is editable!!</p>
                        </div>
                      </div>
                    </a>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[50vh]'></div>
      </div>
    </>
  )
}

export default App
