/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendanceWhereInput } from "./AttendanceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AttendanceCountArgs {
  @ApiProperty({
    required: false,
    type: () => AttendanceWhereInput,
  })
  @Field(() => AttendanceWhereInput, { nullable: true })
  @Type(() => AttendanceWhereInput)
  where?: AttendanceWhereInput;
}

export { AttendanceCountArgs as AttendanceCountArgs };
