import Stop from './stop'
import Name from './name'
import Position from './position'

interface Station {
    StationUID: string,
    StationID: string,
    StationName: Name,
    StationPosition: Position,
    StationAddress?: string,
    StationGroupID: string,
    Stops: Stop[],
    LocationCityCode: string,
    Bearing: string,
    UpdateTime: string,
    VersionID: number
}

export default Station