import { Controller, Get, UseFilters } from "@nestjs/common";
import { HttpExceptionFilter } from "./http-exception.filter";
import { throwError } from "rxjs";

@Controller('errors')
export class ErrorController {
    @Get()
    @UseFilters(HttpExceptionFilter)
    throwError() {
        throw new Error('Something went wrong');
    }
}