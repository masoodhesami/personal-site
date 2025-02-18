import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import image from "../../public/threedots.svg"
import styles from "./header.module.css"
import { CodeIcon, FingerPrintIcon, HomeIcon, LightBulbIcon, MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const solutions = [
    {
        name: 'Main',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: HomeIcon,
    },
    {
        name: 'About',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#about',
        icon: FingerPrintIcon,
    },
    {
        name: 'Designs',
        description: "Your customers' data will be safe and secure.",
        href: '#designs',
        icon: LightBulbIcon
    },
    {
        name: 'Projects',
        description: "Connect with third-party tools that you're already using.",
        href: '#projects',
        icon: CodeIcon,
    },
    {
        name: 'Contact',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#contact',
        icon: MailIcon,
    },
]

export default function Header() {
    const [active, setActive] = useState("")

    function download() {
        const URL = '/resume.pdf'
        if (typeof window !== "undefined") {
            window.location.href = URL
        }
    }

    return (
        <Popover className={styles.mainHeader}>
            <div className={styles.headerSetting}>
                <div
                    className={styles.headerItems}>
                    <div className={styles.itemsFlex}>
                        <a href="#">
                            <span className="sr-only">ThreeDots</span>
                            <img className={styles.logoImage}
                                src={image}
                                alt="ThreeDots"
                            />
                        </a>
                    </div>
                    <div className={styles.popoverDisplay}>
                        <Popover.Button
                            className={styles.popoverSetting}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className={styles.popoverGroup}>
                        {solutions.map((item,index) =>
                            <a key={index} href={`${item.href}`} onClick={() => setActive(item.name)}
                                className={`${styles.popoverGroupItems} ${active == item.name && styles.popoverItemsActive}`}>
                                {`${item.name}`}
                            </a>)}

                    </Popover.Group>
                    <div className={styles.CVBtnDisplay}>
                        <button onClick={download}
                            className={styles.CVBtnStyle}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                    className={styles.popoverPanelDisplay}>
                    <div
                        className={styles.popoverPanelSetting}>
                        <div className="pt-5 pb-6 px-5">
                            <div className={styles.popoverPanelFlex}>
                                <div>
                                    <img
                                        className="h-5 w-8"
                                        src={image}
                                        alt="TreeDots"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className={styles.popoverCloseBtn}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className={styles.navGrid}>
                                    {solutions.map((item,index) => (
                                        <a onClick={() => window.location.replace(`/${item.href}`)}
                                            key={index}
                                            href={item.href}
                                            className={styles.popoverPanelItems}
                                        >
                                            <item.icon className={styles.popoverPanelIcons}
                                                aria-hidden="true" />
                                            <span
                                                className={styles.popoverPanelTexts}>{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <button onClick={download}
                                    className={styles.fullCVBtn}>
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
