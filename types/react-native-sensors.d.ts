declare module 'react-native-sensors' {
    import { Observable } from 'rxjs';
    export const barometer: Observable<{pressure: number}>;    
}