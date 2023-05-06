package ru.coursework.flightSearchSystem.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.coursework.flightSearchSystem.entities.TrainRequest;
import ru.coursework.flightSearchSystem.repositories.TrainRequestRepository;

import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class TrainRequestService {

    private final TrainRequestRepository repository;

    public void saveRequest(TrainRequest trainRequest) {
        repository.save(trainRequest);
    }

//    public void addRequest(TrainRequest trainRequest) {
//        LocalDate now = LocalDate.now();
//        TrainRequest request = new TrainRequest();
//        request.setCreated_at(trainRequest.getCreated_at());
//        request.setPerson(trainRequest.getPerson());
//        request.setDeparture_at(trainRequest.getDeparture_at());
//        request.setFrom(trainRequest.getFrom());
//        request.setTo(trainRequest.getTo());
//        repository.save(request);
//    }

}
