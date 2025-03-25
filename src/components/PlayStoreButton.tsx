import React from 'react'
import clsx from 'clsx'

import { ctaData } from '@/data/cta'

const PlayStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaData.playStoreUrl || '#'}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.82227 3.5625C4.58789 3.79688 4.44727 4.18945 4.44727 4.70117V20.2988C4.44727 20.8105 4.58789 21.2031 4.82227 21.4375L4.87891 21.4941L13.8408 12.5322V12.4678L4.87891 3.50586L4.82227 3.5625Z" fill="currentColor" />
                    <path d="M17.3018 16.0117L13.8408 12.5322V12.4678L17.3018 8.98828L17.3701 9.0332L21.4932 11.4258C22.6455 12.0732 22.6455 13.1152 21.4932 13.7627L17.3701 16.1553L17.3018 16.0117Z" fill="currentColor" />
                    <path d="M17.3701 16.1553L13.8408 12.5L4.82227 21.4375C5.19531 21.8438 5.79492 21.8965 6.49023 21.4902L17.3701 16.1553Z" fill="currentColor" />
                    <path d="M17.3701 8.84766L6.49023 3.51172C5.79492 3.10547 5.19531 3.1582 4.82227 3.56445L13.8408 12.5L17.3701 8.84766Z" fill="currentColor" />
                </svg>
                <div className="ml-3 text-left">
                    <p className="text-[10px] font-medium leading-none">Get it on</p>
                    <p className="text-xl font-semibold leading-tight">Google Play</p>
                </div>
            </button>
        </a>
    )
}

export default PlayStoreButton