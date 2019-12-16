class Api::V1::NotesController < ApplicationController

    def index
        @notes = Note.all
        render json: @notes, status: 200 
    end 

    def show
        @note = Note.find(params[:id])
        render json: @note, status: 200
    end 

    def create
        binding.pry
        #same here later change to Note.new, following if statement with applied conventions
        @note = Note.create(note_params)
        render json: @note, status: 200
    end 

    def update
        #should add back in usual conventions if @note.update (works), then update etc, if not then error or return to previous process, etc refer to previous rails apps
        @note = Note.find(params[:id])
        @note.update(note_params)
        render json: @note, status: 200
    end 
    
    def destroy
        @note = Note.find(params[:id])
        @note.delete
        render json: {noteId: @note.id} #do not want to pass back all info, just the reference to what was deleted
    end
    private
        def note_params
            params.require(:note).permit(:body) #for now
        end 
end
