export type ItemAvailabilityMode = 'incoming' | 'reservation';
export interface ItemAvailability {
    mode: ItemAvailabilityMode;
    remaining: number;
    reserved: number | null;
    unreserved: number | null;
    allocatable: number | null;
    processable: boolean;
}
export interface ComputeItemAvailabilityArgs {
    mode: ItemAvailabilityMode;
    quantity: number;
    remaining: number;
    reserved: number | null;
}
export declare function computeItemAvailability({ mode, quantity, remaining, reserved, }: ComputeItemAvailabilityArgs): ItemAvailability;
