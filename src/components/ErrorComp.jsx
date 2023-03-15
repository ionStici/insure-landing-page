export const ErrorComponent = function () {
    return (
        <>
            <main className="error">
                <div>
                    <a className="error__link" href="/">
                        &larr; Go Back
                    </a>
                </div>
                <h2 className="error__h2">This is a custom error ❗️</h2>
                <p className="error__p">No such page exists</p>
            </main>
        </>
    );
};
