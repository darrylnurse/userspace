import React from 'react'

const Locations = () => {
    return (
        <div>
            <div className={'left-[48%] top-[56%] planet absolute'}>
                <a href={'/mars'}>
                    <img alt={"ares"} className={"h-[12rem]"} src={"/src/assets/mars.png"}/>
                </a>
                <p className={"text-center text-inherit"}>Mars</p>
            </div>
            <div className={'left-[8%] top-[18%] planet absolute'}>
                <a href={'/jupiter'}>
                    <img alt={"zeus"} className={"h-[25rem]"} src={"/src/assets/jupiter.png"}/>
                </a>
                <p className={"text-center text-inherit"}>Jupiter</p>
            </div>

            <div className={'left-[72%] top-[26%] planet absolute'}>
                <a href={'/pluto'}>
                    <img alt={"hades"} className={"h-[5rem]"} src={"/src/assets/pluto.png"}/>
                </a>
                <p className={"text-center text-inherit"}>Pluto</p>
            </div>

            <div className={'left-[80%] top-[70%] planet absolute'}>
                <a href={'/venus'}>
                    <img alt={"aphrodite"} className={"h-[9rem]"} src={"/src/assets/venus.png"}/>
                </a>
                <p className={"text-center text-inherit"}>Venus</p>
            </div>
        </div>
    )
}

export default Locations