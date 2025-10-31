const navBar = document.createElement("navbar");
navBar.innerHTML = `<header>
                <div class="logo">
                    <img class="logoIcon" src="/QuickBank/src/assets/Logo.png"/></image>
                    <h1>QuickBank</h1>
                </div>
                <div class="logContainer">
                    <a class="signIn" href="/QuickBank/src/views/sign_in.html">
                        Sign in
                    </a>
                    <a class="signUp" href="/QuickBank/src/views/sign_up.html">
                        Sign up
                    </a>
                </div>
            </header>`;

export default navBar;