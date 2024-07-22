/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AttendanceListRelationFilter } from "../../attendance/base/AttendanceListRelationFilter";
import { RegisterListRelationFilter } from "../../register/base/RegisterListRelationFilter";
import { EnrollmentListRelationFilter } from "../../enrollment/base/EnrollmentListRelationFilter";

@InputType()
class StudentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  email?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  dateOfBirth?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => AttendanceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendanceListRelationFilter)
  @IsOptional()
  @Field(() => AttendanceListRelationFilter, {
    nullable: true,
  })
  attendances?: AttendanceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => RegisterListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RegisterListRelationFilter)
  @IsOptional()
  @Field(() => RegisterListRelationFilter, {
    nullable: true,
  })
  registers?: RegisterListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => EnrollmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => EnrollmentListRelationFilter)
  @IsOptional()
  @Field(() => EnrollmentListRelationFilter, {
    nullable: true,
  })
  enrollments?: EnrollmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  parent?: StringNullableFilter;
}

export { StudentWhereInput as StudentWhereInput };
