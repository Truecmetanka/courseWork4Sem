package ru.coursework.flightSearchSystem.contollers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class AviaTicketsController {

    @GetMapping("/getFlight")
    public JsonNode getFlight() throws JsonProcessingException {
        String uri = "https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&departure_at=2023-06-05&return_at=2023-06-10&sorting=price&direct=true&limit=10&token=15f19213084d9b861001e4d44ffe7d08";

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(result);

        boolean success = jsonNode.get("success").asBoolean();
        String currency = jsonNode.get("currency").asText();
        JsonNode dataNode = jsonNode.get("data");

        System.out.println(success);
        System.out.println(currency);
        System.out.println(dataNode);

        return dataNode;
    }
}