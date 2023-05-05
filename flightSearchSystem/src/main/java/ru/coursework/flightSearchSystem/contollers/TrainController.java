package ru.coursework.flightSearchSystem.contollers;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import ru.coursework.flightSearchSystem.services.TrainService;
import ru.coursework.flightSearchSystem.util.TrainRequest;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
public class TrainController {

    private final TrainService trainService;


    /**
     * @param trainRequest вида {
     *                     "from": "Москва (Курский вокзал)",
     *                     "to": "Ростов-Главный",
     *                     "departure_at": "2023-06-03"
     *                     }
     * @return
     * @throws IOException
     */
    @GetMapping("/getTrains")
    public JsonNode getTrains(@RequestBody TrainRequest trainRequest) throws IOException {

        String from = trainService.findCodeByName(trainRequest.getFrom());
        String to = trainService.findCodeByName(trainRequest.getTo());

        String urlToApi = "https://api.rasp.yandex.net/v3.0/search/?" +
                "format=json" +
                "&from=" + from +
                "&to=" + to +
                "&lang=ru_RU" +
                "&page=1" +
                "&date=" + trainRequest.getDeparture_at() +
                "&apikey=8a9f7fda-a5fc-451d-b0ac-8035ae9158ba" +
                "&system=yandex";

        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(urlToApi, String.class);

        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(result);

//        boolean success = jsonNode.get("success").asBoolean();
//        String currency = jsonNode.get("currency").asText();

        JsonNode dataNode = jsonNode.get("segments");


        return dataNode;
    }
}
