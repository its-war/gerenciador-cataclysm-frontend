<template>
  <v-system-bar window color="">
    <div class="ma-auto">
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <span class="ms-2">Aqui será os avisos do site.</span>
    </div>
  </v-system-bar>
  <v-navigation-drawer location="left" permanent>
    <v-list>
      <v-list-item
          prepend-avatar="/icon.jpg"
          title="Gerenciador"
          subtitle="WOW Cataclysm"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-bullseye-arrow" title="Quests" value="quests"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-dialog v-model="dialogQuest" width="80%">
    <v-card>
      <v-btn @click="dialogQuest = false" icon flat style="position: absolute; right: 0; top: 0"><v-icon icon="mdi-close"></v-icon></v-btn>
      <v-card-title>Quest {{dialogObj.id}}</v-card-title>
      <v-card-text style="height: 500px; overflow: auto">
        <v-row no-gutters>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field v-model="dialogObj.id" prepend-icon="mdi-identifier" type="number" variant="outlined" label="ID"></v-text-field>
          </v-col>
          <v-col cols="12" sm="5" class="pa-1">
            <v-text-field v-model="dialogObj.title" prepend-icon="mdi-format-title" variant="outlined" label="Title"></v-text-field>
          </v-col>
          <v-col cols="12" sm="5" class="pa-1">
            <v-textarea v-model="dialogObj.objectives" rows="2" prepend-icon="mdi-playlist-check" variant="outlined" label="Objectives"></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea v-model="dialogObj.details" rows="2" prepend-icon="mdi-details" variant="outlined" label="Details"></v-textarea>
          </v-col>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea v-model="dialogObj.EndText" rows="2" prepend-icon="mdi-text" variant="outlined" label="EndText"></v-textarea>
          </v-col>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea v-model="dialogObj.OfferRewardText" rows="2" prepend-icon="mdi-currency-usd" variant="outlined" label="OfferRewardText"></v-textarea>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea v-model="dialogObj.RequestItemsText" rows="2" prepend-icon="mdi-format-list-text" variant="outlined" label="RequestItemsText"></v-textarea>
          </v-col>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea v-model="dialogObj.CompletedText" rows="2" prepend-icon="mdi-text-box-check" variant="outlined" label="CompletedText"></v-textarea>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.method" prepend-icon="mdi-counter" variant="outlined" label="method"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.level" prepend-icon="mdi-counter" variant="outlined" label="level"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="4" class="pa-1">
            <v-textarea rows="2" v-model="dialogObj.note" prepend-icon="mdi-note" variant="outlined" label="note"></v-textarea>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.minlevel" prepend-icon="mdi-counter" variant="outlined" label="minlevel"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.maxlevel" prepend-icon="mdi-counter" variant="outlined" label="maxlevel"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.requiredclasses" prepend-icon="mdi-counter" variant="outlined" label="requiredclasses"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.requiredRaces" prepend-icon="mdi-counter" variant="outlined" label="requiredRaces"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemId1" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemId1"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemId2" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemId2"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemId3" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemId3"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemId4" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemId4"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.PrevQuestId" prepend-icon="mdi-identifier" variant="outlined" label="PrevQuestId"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.NextQuestID" prepend-icon="mdi-identifier" variant="outlined" label="NextQuestID"></v-text-field>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.Flags" prepend-icon="mdi-identifier" variant="outlined" label="Flags"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemCount1" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemCount1"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemCount2" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemCount2"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemCount3" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemCount3"></v-text-field>
          </v-col>
          <v-col cols="12" sm="2" class="pa-1">
            <v-text-field type="number" v-model="dialogObj.RewardItemCount4" prepend-icon="mdi-identifier" variant="outlined" label="RewardItemCount4"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn @click="dialogActionCancelar" color="white">Cancelar</v-btn>
        <v-btn color="red">
          Excluir
          <v-dialog
              v-model="dialogConfirmeExluir"
              activator="parent"
              width="auto"
          >
            <v-card>
              <v-card-text>
                Ação é irreversível, tem certeza?
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn color="white" @click="dialogConfirmeExluir = false">Cancelar</v-btn>
                <v-btn color="red" @click="exluirQuest" :loading="loadingExluir">Exluir</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn>
        <v-btn @click="salvar" color="success" :loading="loadingSalvar">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-main style="width: 100%" scrollable>
    <v-breadcrumbs :items="['Home']"></v-breadcrumbs>
    <v-card style="padding: 15px">
      <v-card-title>Resumo das Quests</v-card-title>
      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4"></v-col>
          <v-col cols="12" sm="4"></v-col>
          <v-col cols="12" sm="4">
            <v-text-field :loading="pesquisa.loading" @click:appendInner="pesquisa.texto = ''" v-model="pesquisa.texto" @keyup="pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined" append-inner-icon="mdi-close-circle" label="Pesquisar"></v-text-field>
          </v-col>
        </v-row>
        <v-table fixed-header fixed-footer height="500px" density="comfortable" hover>
          <thead>
            <tr>
              <th class="text-left" v-for="(header, i) in resumoTable.headers" :key="i">{{header}}</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="!resumoTable.loading && resumoTable.dados[0].id && pesquisa.texto.length === 0">
            <tr v-for="(d, i) in resumoTable.dados" :key="i">
              <td>{{d.id}}</td>
              <td :title="d.title">{{encurtarTexto(d.title)}}</td>
              <td :title="d.objectives">{{encurtarTexto(d.objectives)}}</td>
              <td :title="d.details">{{encurtarTexto(d.details)}}</td>
              <td :title="d.EndText">{{encurtarTexto(d.EndText)}}</td>
              <td :title="d.OfferRewardText">{{encurtarTexto(d.OfferRewardText)}}</td>
              <td :title="d.RequestItemsText">{{encurtarTexto(d.RequestItemsText)}}</td>
              <td :title="d.CompletedText">{{encurtarTexto(d.CompletedText)}}</td>
              <td><v-btn @click="openDialogQuest(d.id)" :loading="btnPlusLoading" size="x-small" icon><v-icon icon="mdi-dots-vertical"></v-icon></v-btn></td>
            </tr>
          </tbody>
          <tbody v-else-if="resumoTable.loading">
            <tr>
              <td style="text-align: center" colspan="9"><v-progress-circular indeterminate :size="128"></v-progress-circular></td>
            </tr>
          </tbody>
          <tbody v-if="pesquisa.texto.length > 0 && pesquisa.dados.length > 0">
          <tr v-for="(d, i) in pesquisa.dados" :key="i">
            <td>{{d.id}}</td>
            <td :title="d.title">{{encurtarTexto(d.title)}}</td>
            <td :title="d.objectives">{{encurtarTexto(d.objectives)}}</td>
            <td :title="d.details">{{encurtarTexto(d.details)}}</td>
            <td :title="d.EndText">{{encurtarTexto(d.EndText)}}</td>
            <td :title="d.OfferRewardText">{{encurtarTexto(d.OfferRewardText)}}</td>
            <td :title="d.RequestItemsText">{{encurtarTexto(d.RequestItemsText)}}</td>
            <td :title="d.CompletedText">{{encurtarTexto(d.CompletedText)}}</td>
            <td><v-btn @click="openDialogQuest(d.id)" :loading="btnPlusLoading" size="x-small" icon><v-icon icon="mdi-dots-vertical"></v-icon></v-btn></td>
          </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="9" style="text-align: center">
                Não há registros.
              </td>
            </tr>
          </tbody>
          <tfoot style="padding: 0 !important;">
            <tr style="padding: 0 !important;">
              <td colspan="9" style="padding: 0 !important;">
                <v-pagination style="background-color: rgb(30,30,30); width: 100%" total-visible="15" :length="resumoTable.paginator.total" v-model="resumoTable.paginator.pagina"></v-pagination>
              </td>
            </tr>
          </tfoot>
        </v-table>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "HomePage",
  data: () => ({
    resumoTable: {
      headers: [
          'id', 'title', 'objectives', 'details', 'EndText', 'OfferRewardText', 'RequestItemsText',
        'CompletedText'
      ],
      dados: [
        {
          id: null,
          title: '',
          objectives: '',
          details: '',
          EndText: '',
          OfferRewardText: '',
          RequestItemsText: '',
          CompletedText: ''
        }
      ],
      paginator: {
        pagina: 1,
        total: 0
      },
      loading: false
    },
    dialogQuest: false,
    dialogObj: {
      CompletedText: null,
      EndText: null,
      Flags: null,
      NextQuestID: null,
      OfferRewardText: null,
      PrevQuestId: null,
      RequestItemsText: null,
      RewardItemCount1: null,
      RewardItemCount2: null,
      RewardItemCount3: null,
      RewardItemCount4: null,
      RewardItemId1: null,
      RewardItemId2: null,
      RewardItemId3: null,
      RewardItemId4: null,
      details: null,
      id: null,
      level: null,
      maxlevel: null,
      method: null,
      minlevel: null,
      note: null,
      objectives: null,
      requiredRaces: null,
      requiredclasses: null,
      title: null
    },
    dialogObjOriginal: null,
    btnPlusLoading: false,
    dialogConfirmeExluir: false,
    loadingSalvar: false,
    loadingExluir: false,
    pesquisa: {
      texto: '',
      dados: [
        {
          id: null,
          title: '',
          objectives: '',
          details: '',
          EndText: '',
          OfferRewardText: '',
          RequestItemsText: '',
          CompletedText: ''
        }
      ],
      loading: false
    }
  }),
  mounted() {
    this.carregar();
  },
  methods: {
    encurtarTexto(texto){
      if(texto){
        if(texto.length >= 50){
          return texto.substring(0, 50) + '...';
        }
      }
      return texto;
    },
    openDialogQuest(id){
      this.btnPlusLoading = true;
      this.$axios.quest.listById(id).then((value) => {
        if(value.data){
          this.dialogObj = value.data.resultado[0];
          this.dialogObjOriginal = this.dialogObj.id;
          this.dialogQuest = true;
        }else{
          //disparar erro
        }
      }).finally(() => {this.btnPlusLoading = false;});
    },
    dialogActionCancelar(){
      this.dialogObj = this.dialogObjOriginal;
      this.dialogQuest = false;
    },
    exluirQuest(){
      this.loadingExluir = true;
      this.$axios.quest.excluir(this.dialogObjOriginal).then((value) => {
        if(value.data){
          this.carregar();
          this.loadingExluir = false;
          this.dialogConfirmeExluir = false;
          this.dialogQuest = false;
        }
      }).finally(() => {
        this.dialogConfirmeExluir = false;
        this.dialogQuest = false;
      });
    },
    salvar(){
      this.loadingSalvar = true;
      this.$axios.quest.update(this.dialogObj.id, this.dialogObj.title, this.dialogObj.objectives, this.dialogObj.details, this.dialogObj.EndText, this.dialogObj.OfferRewardText, this.dialogObj.RequestItemsText, this.dialogObj.CompletedText,
          this.dialogObj.method, this.dialogObj.note, this.dialogObj.level, this.dialogObj.minlevel, this.dialogObj.maxlevel, this.dialogObj.requiredclasses, this.dialogObj.requiredRaces, this.dialogObj.PrevQuestId,
          this.dialogObj.NextQuestID, this.dialogObj.Flags, this.dialogObj.RewardItemId1, this.dialogObj.RewardItemId2, this.dialogObj.RewardItemId3, this.dialogObj.RewardItemId4, this.dialogObj.RewardItemCount1,
          this.dialogObj.RewardItemCount2, this.dialogObj.RewardItemCount3, this.dialogObj.RewardItemCount4, this.dialogObjOriginal).then((value) => {
            if(value.data){
              if(!value.data.duplicate){
                this.alterarTabela();
              }
              this.carregar();
            }
      }).finally(() => {
        this.loadingSalvar = false;
        this.dialogQuest = false;
      });
    },
    alterarTabela(){
      for(let i = 0; i < this.resumoTable.dados.length; i++){
        if(this.resumoTable.dados[i].id === this.dialogObjOriginal){
          this.resumoTable.dados[i] = this.dialogObj;
        }
      }
    },
    carregar(){
      this.resumoTable.loading = true;
      this.$axios.quest.listPerPage(this.resumoTable.paginator.pagina).then((value) => {
        if(value.data){
          this.resumoTable.dados = value.data.resultado;
          this.resumoTable.paginator.total = value.data.totalPaginas;
        }else{
          this.resumoTable.dados = [];
        }
      }).finally(() => {
        this.resumoTable.loading = false;
      });
    },
    pesquisar(){
      if(this.pesquisa.texto.length > 0){
        this.pesquisa.loading = true;
        let mascara = parseInt(this.pesquisa.texto);
        if(isNaN(mascara)){
          if(this.pesquisa.texto.length >= 3){
            this.$axios.quest.pesquisar(this.pesquisa.texto).then((value) => {
              this.pesquisa.dados = value.data.resultado;
              this.pesquisa.loading = false;
            });
          }
        }else{
          this.$axios.quest.listById(mascara).then((value) => {
            this.pesquisa.dados = value.data.resultado;
            this.pesquisa.loading = false;
          });
        }
      }else{
        this.pesquisa.loading = false;
      }
    }
  },
  watch:{
    'resumoTable.paginator.pagina'(){
      this.carregar();
    }
  }
}
</script>

<style scoped>

</style>