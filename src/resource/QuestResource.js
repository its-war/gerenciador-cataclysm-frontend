import axios from 'axios';
export default class QuestResource {
    constructor(urlBase) {
        this.http = axios.create({
            baseURL: urlBase
        });
    }

    listPerPage(page){
        return this.http.get('quest/listar/' + page);
    }

    listById(id){
        return this.http.post('quest/listarPorId', {id: id});
    }

    update(id, title, objectives, details, EndText, OfferRewardText, RequestItemsText, CompletedText,
           method, note, level, minlevel, maxlevel, requiredclasses, requiredRaces, PrevQuestId,
           NextQuestID, Flags, RewardItemId1, RewardItemId2, RewardItemId3, RewardItemId4, RewardItemCount1,
           RewardItemCount2, RewardItemCount3, RewardItemCount4, idOriginal){
        return this.http.post('quest/editar', {
            id:id, title:title, objectives:objectives, details:details, EndText:EndText, OfferRewardText:OfferRewardText, RequestItemsText:RequestItemsText, CompletedText:CompletedText,
            method:method, note:note, level:level, minlevel:minlevel, maxlevel:maxlevel, requiredclasses:requiredclasses, requiredRaces:requiredRaces, PrevQuestId:PrevQuestId,
            NextQuestID:NextQuestID, Flags:Flags, RewardItemId1:RewardItemId1, RewardItemId2:RewardItemId2, RewardItemId3:RewardItemId3, RewardItemId4:RewardItemId4, RewardItemCount1:RewardItemCount1,
            RewardItemCount2:RewardItemCount2, RewardItemCount3:RewardItemCount3, RewardItemCount4:RewardItemCount4, idOriginal:idOriginal
        });
    }

    excluir(id){
        return this.http.post('quest/excluir', {id:id});
    }

    pesquisar(texto){
        return this.http.post('quest/pesquisar', {texto: texto});
    }
}