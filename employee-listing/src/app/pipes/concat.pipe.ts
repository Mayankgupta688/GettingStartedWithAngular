import { Pipe } from "@angular/core";

@Pipe({
    name: "concatLength"
})
export class ConcatLength {
    transform(value: string) {
        if(value.length > 0) {
            return value + "(" + value.length + ")";
        } else {
            return value;
        }
    }
}