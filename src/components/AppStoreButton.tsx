import React from 'react'
import clsx from 'clsx'
import { ctaData } from '@/data/cta'

const AppStoreButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href={ctaData.appStoreUrl || '#'}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit", { "text-white bg-foreground": dark, "text-foreground bg-white": !dark })}
            >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3486 12.7695C16.3369 10.7285 18.0322 9.71875 18.1143 9.67383C17.0635 8.18164 15.4385 7.97852 14.8486 7.95898C13.4463 7.81836 12.0908 8.80273 11.377 8.80273C10.6455 8.80273 9.53321 7.97852 8.35743 7.99805C6.82618 8.01758 5.40821 8.91211 4.64649 10.2949C3.07227 13.1016 4.24805 17.2383 5.76758 19.2402C6.52929 20.2148 7.41211 21.3086 8.57618 21.2695C9.70899 21.2305 10.1533 20.5762 11.5088 20.5762C12.8467 20.5762 13.2666 21.2695 14.4424 21.248C15.6533 21.2305 16.4072 20.2539 17.1494 19.2695C18.0088 18.1562 18.3701 17.0723 18.3877 17.0137C18.3525 17.002 16.3633 16.2383 16.3486 12.7695Z" fill="currentColor" />
                    <path d="M14.4072 6.49023C15.0439 5.70898 15.4814 4.64258 15.3643 3.5625C14.4424 3.5957 13.2842 4.18555 12.6299 4.94727C12.0498 5.61523 11.5205 6.71094 11.6553 7.75781C12.6826 7.82227 13.7529 7.25195 14.4072 6.49023Z" fill="currentColor" />
                </svg>
                <div className="ml-3 text-left">
                    <p className="text-[10px] font-medium leading-none">Download on the</p>
                    <p className="text-xl font-semibold leading-tight">App Store</p>
                </div>
            </button>
        </a>
    )
}

export default AppStoreButton