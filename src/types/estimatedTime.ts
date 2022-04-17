import Stop from '@/types/stop'
interface EstimatedTime extends Stop {
    Direction: number,
    EstimateTime: number,
    StopStatus: number, //車輛狀態備註 : [0:'正常',1:'尚未發車',2:'交管不停靠',3:'末班車已過',4:'今日未營運']
    SrcUpdateTime: string,
    UpdateTime: string
}

export default EstimatedTime