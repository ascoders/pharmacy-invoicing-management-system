export const fetchComponentDataBeforeRender = (dispatch, components, params) => {
    console.log(components)
    const needs = components.reduce((prev, current) => {
        return (current.need || [])
            .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
            .concat(prev)
    }, [])
    const promises = needs.map(need => dispatch(need()))
    return Promise.all(promises)
}