<div id="container" class="container">
    <button class="rainbow-button">Hover me</button>
</div>

<style>
    .container {
        padding: 1rem;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .rainbow-button {
        padding: 0.75rem 1rem;
        border-radius: 0.375rem;
        background-color: rgb(229, 231, 235);
        border: none;
        font-size: 16px;
        transition: background 0.5s;
        background-size: 200% auto;
    }

    .rainbow-button:hover {
        cursor: pointer;
        background-image: linear-gradient(
            90deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #8f00ff
        );
        animation: rainbow-animation 5s linear infinite;
    }

    @keyframes rainbow-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>