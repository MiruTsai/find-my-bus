import Name from './name'
interface SubRoute {
    SubRouteUID: string,
    SubRouteID: string,
    OperatorIDs: string[],
    SubRouteName: Name,
    Direction: number,
    FirstBusTime: string,
    LastBusTime: string,
    HolidayFirstBusTime: string,
    HolidayLastBusTime: string
}

export default SubRoute