import Name from './name'
interface Stop {
    StopUID: string,
    StopID: string,
    StopName: Name,
    RouteUID: string,
    RouteID: string,
    RouteName: Name
}

export default Stop