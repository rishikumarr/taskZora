const Header = () => {
    return (
        <div className="flex justify-between">
            <h1>Tasks</h1>
            <ul className="flex gap-2">
                <li>home</li>
                <li>profile</li>
                <li>about</li>
            </ul>
        </div>
    )
}

export default Header;