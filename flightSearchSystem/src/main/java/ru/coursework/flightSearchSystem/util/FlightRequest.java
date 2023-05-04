package ru.coursework.flightSearchSystem.util;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.time.LocalDate;

@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class FlightRequest {
    String origin;
    String destination;
    LocalDate departure_at;
    LocalDate return_at;
}
