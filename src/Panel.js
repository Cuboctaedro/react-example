export const Panel = ({ title, id, children }) => {
    return (
        <section class="tab-content block pt-6" id={id} data-tab-content={id}>
            <h2 class="title is-3 pt-3">{ title }</h2>

            <div class="content">
                { children }
            </div>
        </section>
    );
}