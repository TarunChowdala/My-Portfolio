'use client'
import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        // const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        // if (!hCaptcha) {
        //     event.preventDefault();
        //     setResult("Please fill out captcha field");
        //     return
        // }
        setResult("Sending....");
        setTimeout(() => {
            setResult("Message sent successfully! I'll get back to you soon.");
        }, 1000);
        return;
        const formData = new FormData(event.target);

        // ----- Enter your Web3 Forms Access key below---------

        formData.append("access_key", "--- enter your access key here-------");

        const res = {success:true}
        // const res = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     body: formData
        // }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-24 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Let&apos;s work together</h4>
            <h2 className="text-center text-5xl font-Ovo">Want to build together?</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo">I&apos;m open to freelance projects and full-time opportunities. Whether you need a full-stack developer for your next project or looking to add a team member, let&apos;s connect and discuss how we can bring your ideas to life.</p>

            {/* <div className="max-w-2xl mx-auto mb-12 flex flex-wrap justify-center gap-6 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 dark:text-white/60 mb-1">Email</p>
                    <a href="mailto:tarunchowdala300@gmail.com" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">tarunchowdala300@gmail.com</a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 dark:text-white/60 mb-1">Mobile</p>
                    <a href="tel:+917989685788" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">+91 79896 85788</a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 dark:text-white/60 mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/tarun-chowdala-77214125b/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">tarun-chowdala-77214125b</a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 dark:text-white/60 mb-1">GitHub</p>
                    <a href="https://github.com/TarunChowdala" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300">TarunChowdala</a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-sm text-gray-600 dark:text-white/60 mb-1">Location</p>
                    <p className="text-gray-700 dark:text-white">Hyderabad, Telangana</p>
                </div>
            </div> */}

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="subject" value="Tarun - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="name" />

                    <input type="email" placeholder="Enter your email" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="email" />
                </div>
                <textarea rows="6" placeholder="Enter your message" className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" required name="message"></textarea>
                {/* <div className="h-captcha mb-6 max-w-full" data-captcha="true"></div> */}
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover">
                Submit now
                    <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    )
}