import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { BiDownArrow } from "react-icons/bi";

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 2000 })
    ]);
    const posi = [0, 50, 92];
    const years = [2022, 2023, 2024];
    const [posIdx, setPosIdx] = useState(0)

    useEffect(() => {
        const handleInterval = () => {
            setPosIdx((posIdx) => ((posIdx + 1) % 3))
            console.log('Event triggered');
        };

        // Set up the interval
        const intervalId = setInterval(handleInterval, 2000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [posIdx]);
    const [isPlaying, setIsPlaying] = useState(true)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback) => {
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        setIsPlaying(autoplay.isPlaying())
        emblaApi
            .on('autoplay:play', () => setIsPlaying(true))
            .on('autoplay:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
    }, [emblaApi])

    return (
        <div className="embla space-y-10">
            <div className="w-full">
                <div className="w-full items-center justify-between flex">
                    <div className="rounded-[50%] p-1 border border-white"><PrevButton
                        onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                    /></div>
                    <div className="border-t-2 relative border-white w-[98%] px-4" >
                        <div style={{position: 'absolute',left: `${posi[posIdx]}%`}}>
                            <BiDownArrow fontSize={28} />
                            <p>{years[posIdx]}</p>
                        </div>
                    </div>
                    <div className="rounded-[50%] p-1 border border-white"><NextButton
                        onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                    /></div>
                </div>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => (
                        <div className="space-x-8 flex justify-between embla__slide">
                            <div>
                                <Image src={slide.image_src} height={400} width={400}></Image>
                            </div>
                            <div className="w-[50%] space-y-4">
                                <h1 className='text-4xl'>{slide.heading}</h1>
                                <p>{slide.text_content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
