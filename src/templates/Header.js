const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/cientifico">
                        100tifi.co
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <div>
                    <button id="switch" class="switch">
                        <span class="light">
                            <i class="fas fa-sun"></i>
                        </span>
                        <span class="dark">
                            <i class="fas fa-moon"></i>
                        </span>
                    </button>
                </div>
                <a href="#/about/">About</a>
            </div>
        </div>
    `;
    return view
}

export default Header
