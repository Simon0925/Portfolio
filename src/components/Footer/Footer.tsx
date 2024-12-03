




export default function Footer() {

    const date = new Date

    const year = date.getFullYear()

    return (
        <footer className="py-4 px-4 text-center">
            <p className="transition-colors text-black dark:text-white duration-300 hover:text-blue-500">
                © {year} Sam Yakovenko. All rights reserved.
            </p>
        </footer>
    );
}