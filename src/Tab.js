export const Tab = ({ id, label, setSelectedTab, selectedTab }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setSelectedTab(id);
    }

    return (
        <li className={id === selectedTab ? 'is-active' : ''}>
            <a href={`#${id}`} data-tab={id} onClick={handleClick}>{label}</a>
        </li>
    );
}