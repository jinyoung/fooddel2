package fooddel.domain;

import fooddel.domain.*;
import fooddel.infra.AbstractEvent;
import java.util.*;
import lombok.*;

@Data
@ToString
public class CookFinished extends AbstractEvent {

    private Long id;
    private String foodId;
    private String status;
    private String orderId;
}
