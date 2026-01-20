import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const sandwiches = [
    { name: "Cheese & Onion", price: "9.95" },
    { name: "Cheese & Tomato", price: "9.95" },
    { name: "Cheese & Ham", price: "9.95" },
    { name: "Bacon & Brie", price: "9.95" },
    { name: "Tuna & Cheese", price: "9.95" },
    { name: "Sausage & Onion", price: "9.95" },
    { name: "Fish Fingers", price: "9.95" },
  ];

  const wraps = [
    { name: "Sweet Chilli Chicken", description: "Southern fried chicken fillet, sweet chilli sauce, salad", price: "10.95" },
    { name: "Grilled Halloumi", description: "Grilled halloumi, sweet chilli sauce, salad", price: "10.95" },
    { name: "Chicken & Bacon", description: "Southern fried chicken fillet, bacon, mayonnaise, salad", price: "10.95" },
  ];

  const mains = [
    { name: "Beer Battered Cod & Chips", description: "Served with salad, homemade tartar sauce, mushy peas/garden peas & a wedge of lemon", price: "16.95" },
    { name: "Homemade Beef / Roast Vegetable Chilli", description: "Served with rice/chips & salad", price: "15.95" },
    { name: "Homemade Beef / Veggie Lasagne", description: "Served with garlic bread & salad", price: "15.95" },
    { name: "Salt & Pepper Squid", description: "Served with salad, chips, a wedge of lemon & sweet chilli dip", price: "15.95" },
    { name: "Wholetail Breaded Scampi", description: "Served with salad, chips & a wedge of lemon", price: "15.95" },
    { name: "4 Cumberland Sausages", description: "Served with salad, chips & onion rings", price: "13.95" },
    { name: "Ham, Double Egg / Pineapple", description: "Served with chips & salad", price: "14.95" },
    { name: "Homemade Mac & Cheese", description: "Served with salad & garlic bread. Add bacon £1.00", price: "10.95" },
    { name: "Beer Battered Halloumi", description: "Served with salad, chips & sweet chilli dip", price: "15.95" },
    { name: "Chicken Caesar Salad", description: "Chicken fillet, crispy bacon, mixed salad, croutons, anchovies, parmesan & caesar dressing", price: "15.95" },
    { name: "Beef / Roasted Vegetable Chilli Nachos", description: "Topped with melted cheese, served with guacamole & sour cream dip", price: "11.95" },
  ];

  const pizzas = [
    { name: "Plain Jane", description: "Cheese & tomato" },
    { name: "The 'Sue'preme", description: "Ham, pineapple, pepperoni, sausage, sweetcorn, mushroom, onions & peppers" },
    { name: "Spicy Pepperoni", description: "Pepperoni & jalapeños" },
    { name: "Marks Almighty Meat", description: "Nduja sausage, pepperoni, chorizo, ventricina sausage & fresh chillies" },
    { name: "Joes-a-Jerk", description: "Jerk chicken, red onion, peppers & jalapeños" },
    { name: "Dil'Emma'", description: "Peppers, sweetcorn, jalapeños, mushrooms & onion" },
    { name: "Hook, Line & Stinker", description: "Tuna, anchovies, red onion & sweetcorn" },
  ];

  const sides = [
    { name: "Portion Of Chips", price: "4.45" },
    { name: "Cheesy Chips", price: "5.25" },
    { name: "Stilton Chips", price: "5.95" },
    { name: "Chips & Dips", description: "Served with BBQ, sweet chilli & garlic mayo dips", price: "9.45" },
  ];

  const nibbles = [
    { name: "Mozzarella Stix", description: "Served with salad & sweet chilli dip", price: "8.95" },
    { name: "Halloumi Fries", description: "Served with salad & sweet chilli dip", price: "8.95" },
    { name: "Onion Rings", description: "Served with salad & garlic mayo dip", price: "6.95" },
  ];

  const kidsMeals = [
    { name: "Sausage & Chips", price: "6.45" },
    { name: "Fish Fingers & Chips", price: "6.45" },
    { name: "1/4 lb Burger & Chips", price: "6.45" },
    { name: "Chicken Fillet Burger & Chips", price: "6.45" },
    { name: "Veggie (Vegan) Burger & Chips", price: "6.45" },
    { name: "Chicken Fillet Bites & Chips", price: "6.45" },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h4 className="menu-item-name">{name}</h4>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      {price && <span className="menu-item-price">£{price}</span>}
    </div>
  );

  return (
    <main id="main-content">
      <Helmet>
        <title>Food Menu | The Bounty Pub Bourne End | Stone Baked Pizzas & Pub Classics</title>
        <meta name="description" content="View our food menu at The Bounty riverside pub. Stone baked pizzas from £8.95, fish & chips £16.95, homemade lasagne, wraps and kids meals. Fresh pub food with stunning Thames views in Bourne End, Buckinghamshire." />
        <meta name="keywords" content="pub food Bourne End, riverside restaurant menu, stone baked pizza Thames, fish and chips Buckinghamshire, pub lunch Cookham, family friendly pub menu" />
        <meta property="og:title" content="Food Menu | The Bounty Pub Bourne End" />
        <meta property="og:description" content="Delicious pub food with stunning Thames views. Stone baked pizzas, fish & chips, and classic pub favourites." />
        <meta property="og:type" content="restaurant.menu" />
        <meta property="og:url" content="https://thebountypub.co.uk/menu" />
        <link rel="canonical" href="https://thebountypub.co.uk/menu" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Menu",
            "name": "The Bounty Food Menu",
            "description": "Fresh pub food including stone baked pizzas, fish & chips, homemade dishes and more",
            "inLanguage": "en-GB",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Sandwiches & Toasties",
                "description": "All served with salad & chips"
              },
              {
                "@type": "MenuSection",
                "name": "Mains",
                "hasMenuItem": [
                  {"@type": "MenuItem", "name": "Beer Battered Cod & Chips", "description": "Served with salad, homemade tartar sauce, mushy peas & lemon", "offers": {"@type": "Offer", "price": "16.95", "priceCurrency": "GBP"}},
                  {"@type": "MenuItem", "name": "Homemade Beef Lasagne", "description": "Served with garlic bread & salad", "offers": {"@type": "Offer", "price": "15.95", "priceCurrency": "GBP"}}
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Stone Baked Pizzas",
                "description": "8 inch from £8.95, 12 inch from £10.95, Gluten Free available"
              },
              {
                "@type": "MenuSection",
                "name": "Kids Meals",
                "description": "All £6.45"
              }
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Menu</h1>
          <p className="hero-location">Fresh food, riverside views</p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-dark menu-section">
        <div className="container">

          {/* Sandwiches & Toasties */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Sandwiches or Toasties</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              All served with salad & chips
            </p>
            {sandwiches.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Wraps */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Wraps</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              All served with salad & chips
            </p>
            {wraps.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Mains */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Mains</h2>
            {mains.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Stone Baked Pizzas */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Stone Baked Pizzas</h2>
            <p style={{ color: 'var(--highlight-gold)', marginBottom: '1.5rem', fontSize: '1rem', fontWeight: '600' }}>
              8" £8.95 &nbsp;|&nbsp; 12" £10.95 &nbsp;|&nbsp; GF 12" £10.95
            </p>
            {pizzas.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Two Column - Sides & Nibbles */}
          <div className="two-column" style={{ marginTop: '4rem' }}>
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Chips</h2>
              {sides.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            <div className="menu-category reveal">
              <h2 className="menu-category-title">Nibbles</h2>
              {nibbles.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Kids Meals */}
          <div className="menu-category reveal" style={{ marginTop: '4rem' }}>
            <h2 className="menu-category-title">Kids Meals</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Add baked beans or peas for 60p
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 3rem' }}>
              {kidsMeals.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Drinks Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--secondary-bg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontStyle: 'italic' }}>Drinks</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Enjoy a selection of real ales, craft beers, wines, and spirits.
              Ask at the bar for our current selection or see our specials board.
            </p>
          </div>

          {/* Allergy Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Please inform staff of any allergies or dietary requirements. Menu items subject to availability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
