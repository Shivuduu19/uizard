import React from 'react'

const Card = ({ profile, name, mail, social, info }) => {
    return (
        <a href="" className="flex flex-col items-start justify-center max-w-full gap-[1.25rem] p-[2rem] border-solid border-[1px]
    border-[#212121] rounded-[0.75rem]">
            <div className="flex items-center gap-[0.75rem] w-full">
                <div className="flex justify-center items-center w-[2.75rem] h-[2.75rem] rounded-[50%]">
                    <img src={profile} alt="" className="w-full h-auto" />
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[2px]">
                    <div className="flex items-center justify-start">
                        <p className="text-[1rem] leading-[1.25rem] tracking-[0px] font-[480px] text-[#f5f5f5]">{name}</p>
                    </div>
                    <p className="text-[0.875rem] leading-[1.25rem] tracking-[0px] text-[#aeaeae] font-normal">{mail}</p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={social} alt="" className="h-[1.5rem] w-[1.5rem] opacity-[0.6] transition-opacity delay-0 duration-[300ms] " />
                </div>

            </div>
            <div className="flex items-center justify-start w-full">
                <div className="text-[1.125rem] leading-[1.5rem] tracking-[-0.2px] font-[480] text-[#f5f5f5]">
                    <p>{info}</p>
                </div>
            </div>
        </a>
    )
}

export default Card