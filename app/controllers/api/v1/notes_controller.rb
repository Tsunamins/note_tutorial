class Api::V1::NotesController < ApplicationController

    def index
        @notes = Note.All
        render json: @notes, status: 200 
    end 
end
