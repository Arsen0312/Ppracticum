import { useEffect } from 'react';

const useOutsideClick = (ref: any, callback: () => void) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [handleClick]);
};

export default useOutsideClick;