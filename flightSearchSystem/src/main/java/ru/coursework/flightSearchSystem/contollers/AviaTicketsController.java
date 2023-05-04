package ru.coursework.flightSearchSystem.contollers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import ru.coursework.flightSearchSystem.services.AviaService;
import ru.coursework.flightSearchSystem.util.FlightRequest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
public class AviaTicketsController {

    private final AviaService aviaService;

    /**
     * @param flightRequest json вида {
     *                      "origin": "Город вылета",
     *                      "destination": "Город прибытия",
     *                      "departure_at": "дата вылета",
     *                      "return_at": "дата возвращения"
     *                      }
     * @return JsonNode вида {
     * "origin": "MOW",
     * "destination": "LED",
     * "origin_airport": "VKO",
     * "destination_airport": "LED",
     * "price": 6790,
     * "airline": "UT",
     * "flight_number": "381",
     * "departure_at": "2023-06-05T19:10:00+03:00",
     * "return_at": "2023-06-10T21:35:00+03:00",
     * "transfers": 0,
     * "return_transfers": 0,
     * "duration": 170,
     * "duration_to": 80,
     * "duration_back": 90,
     * "link": "/search/MOW0506LED10061?t=UT16859814001685986200000080VKOLED16864221001686427500000090LEDVKO_6547ad8b43ccbf1e95eb0961fd88e5c8_6790&search_date=04052023&expected_price_uuid=166699b4-25b4-49a5-a9a3-3243659a358d&expected_price_currency=rub"
     * }
     * @throws JsonProcessingException
     */

    @GetMapping("/getFlights")
    public JsonNode getFlights(@RequestBody FlightRequest flightRequest) throws IOException {

        String origin = aviaService.findIATACode(flightRequest.getOrigin());
        String destination = aviaService.findIATACode(flightRequest.getDestination());

        String urlToApi = "https://api.travelpayouts.com/aviasales/v3/prices_for_dates?" +
                "origin=" + origin + "&destination=" + destination +
                "&departure_at=" + flightRequest.getDeparture_at() +
                "&return_at=" + flightRequest.getReturn_at() +
                "&sorting=price&direct=true&limit=10&" +
                "token=15f19213084d9b861001e4d44ffe7d08";

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(urlToApi, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(result);

//        boolean success = jsonNode.get("success").asBoolean();
//        String currency = jsonNode.get("currency").asText();

        JsonNode dataNode = jsonNode.get("data");

        aviaService.addIATACodeOfAirport(dataNode);
        aviaService.convertCompanyCodeToName(dataNode);

        return dataNode;
    }



}