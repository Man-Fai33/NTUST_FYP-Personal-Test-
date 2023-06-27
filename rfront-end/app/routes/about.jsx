export const meta = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function About() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Welcome to Remix</h1>sd
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/blog"
                        rel="noreferrer"
                    >
                   sdfasdfhskjd
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/jokes"
                        rel="noreferrer"
                    >
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}
