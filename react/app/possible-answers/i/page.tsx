"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function I() {
    const touRef = useRef<HTMLDivElement>(null);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [isErrorShown, setIsErrorShown] = useState<boolean>(false);

    useEffect(() => {
        if (touRef.current) {
            touRef.current.addEventListener("scroll", onTouScroll);

            return () => {
                touRef.current?.removeEventListener("scroll", onTouScroll);
            };
        }
    }, []);

    function onCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
        setIsChecked(event.target.checked);
    }

    function onTouScroll() {
        if (!touRef.current) return;

        setIsScrolledToBottom(
            touRef.current.clientHeight + touRef.current.scrollTop >= touRef.current.scrollHeight
        );
    }

    function onContinue() {
        if (!isChecked) {
            setIsErrorShown(true);
            return;
        }

        setIsErrorShown(false);
        alert("Success!");
    }

    return (
        <div
            id="container"
            className="p-4 min-w-screen h-screen min-h-screen flex flex-col items-center"
        >
            <div ref={touRef} className="bg-gray-200 p-4 w-1/2 h-1/2 rounded-md overflow-scroll">
                <p className="font-bold">[Company Name] Terms of Use</p>
                <br />
                1. Introduction
                <br />
                1.1. Welcome to [Company Name]!
                <br />
                1.2. These Terms of Use govern your use of [Company Name]'s website, services, and
                any related applications (collectively referred to as the "Service").
                <br />
                1.3. By accessing or using the Service, you agree to be bound by these Terms of Use.
                <br />
                2. Definitions
                <br />
                2.1. "Company", "We", "Us", or "Our" refers to [Company Name].
                <br />
                2.2. "User", "You", or "Your" refers to the individual accessing or using the
                Service.
                <br />
                2.3. "Content" refers to text, images, videos, audio, or any other materials
                available on the Service.
                <br />
                3. Acceptable Use
                <br />
                3.1. You agree to use the Service only for lawful purposes and in accordance with
                these Terms of Use.
                <br />
                3.2. You agree not to use the Service in any way that could impair the performance,
                security, or functionality of the Service.
                <br />
                4. Intellectual Property
                <br />
                4.1. All Content available on the Service is the property of [Company Name] or its
                licensors and is protected by intellectual property laws.
                <br />
                4.2. You may not use, modify, reproduce, distribute, or exploit any Content without
                the prior written consent of [Company Name].
                <br />
                5. Privacy
                <br />
                5.1. Your privacy is important to us. Please review our Privacy Policy [link] to
                understand how we collect, use, and disclose your information.
                <br />
                6. Disclaimer
                <br />
                6.1. The Service is provided on an "as is" and "as available" basis, without any
                warranties of any kind, either express or implied.
                <br />
                6.2. We do not warrant that the Service will be uninterrupted, secure, or
                error-free.
                <br />
                7. Limitation of Liability
                <br />
                7.1. In no event shall [Company Name] be liable for any indirect, incidental,
                special, consequential, or punitive damages, arising out of or in connection with
                your use of the Service.
                <br />
                8. Governing Law
                <br />
                8.1. These Terms of Use shall be governed by and construed in accordance with the
                laws of [Jurisdiction], without regard to its conflict of law provisions.
                <br />
                9. Changes to Terms of Use
                <br />
                9.1. [Company Name] reserves the right to modify or revise these Terms of Use at any
                time. Your continued use of the Service after any changes indicates your acceptance
                of the revised terms.
                <br />
                10. Contact Us
                <br />
                10.1. If you have any questions or concerns about these Terms of Use, please contact
                us at [contact email].
                <br />
            </div>

            <label htmlFor="tou-checkbox">
                <input
                    className="mr-3"
                    id="tou-checkbox"
                    type="checkbox"
                    checked={isChecked}
                    onChange={onCheckboxChange}
                    disabled={!isScrolledToBottom}
                />
                I accept the terms of use
            </label>

            {isErrorShown && <p className="text-red-400">You have not accepted the terms of use</p>}

            <button
                className="bg-gray-200 rounded-lg py-3 px-4 mt-3"
                onClick={onContinue}
                disabled={!isScrolledToBottom}
            >
                Continue
            </button>
        </div>
    );
}
