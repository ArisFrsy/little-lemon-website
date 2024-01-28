
const MenuGrid = () => {
    // Sample menu items
    const lemonadeItems = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        name: `Lemonade ${index + 1}`,
        description: `Refreshing lemonade #${index + 1} made with fresh lemons.`,
        price: `$${3.99 + index * 0.5}`, // Incrementing price for variety
        imageUrl:
            'https://c1.wallpaperflare.com/preview/777/942/401/lemonade-lemon-lime-soda-drink-erfrischungsgetr%C3%A4nk.jpg',
    }));

    return (
        <div className="menu-grid" id="menu">
            {lemonadeItems.map((item) => (
                <div key={item.id} className="menu-card">
                    <img src={item.imageUrl} alt={item.name} className="menu-image" />
                    <div className="menu-details">
                        <h3 className="menu-title">{item.name}</h3>
                        <p className="menu-description">{item.description}</p>
                        <p className="menu-price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuGrid;
