import Name from './name'
import Operator from './Operator'
import SubRoute from './subRoute'
interface Route {
    RouteUID: string,
    RouteID: string,
    HasSubRoutes: boolean,
    Operator: Operator[],
    AuthorityID: string,
    ProviderID: string,
    SubRoutes: SubRoute[],
    BusRouteType: number,
    RouteName: Name,
    DepartureStopNameZh: string,
    DepartureStopNameEn: string,
    DestinationStopNameZh: string,
    DestinationStopNameEn: string,
    TicketPriceDescriptionZh: string,
    TicketPriceDescriptionEn: string,
    FareBufferZoneDescriptionZh: string,
    FareBufferZoneDescriptionEn: string,
    RouteMapImageUrl: string,
    City: string,
    CityCode: string,
    UpdateTime: string,
    VersionID: string
}
export default Route