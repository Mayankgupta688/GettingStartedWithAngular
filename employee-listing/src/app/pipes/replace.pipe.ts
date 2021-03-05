import { Pipe } from "@angular/core";

@Pipe({
    name: "replaceCharacter"
})
export class ReplaceCharacter {
    transform(value: any, charToReplace: string, charReplacement: string) {
        return value.replaceAll(charToReplace, charReplacement)
    }
}