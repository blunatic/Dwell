class ConfessionsController < ApplicationController
  before_action :set_confession, only: [:show]
  # enable or disable , :edit, :update, :destroy

  # GET /confessions
  # GET /confessions.json
  def index
    @confessions = Confession.all
  end

  # GET /confessions/1
  # GET /confessions/1.json
  def show
  end

  # GET /confessions/new
  def new
    @confession = Confession.new
  end

  # GET /confessions/1/edit
  def edit
  end

  # POST /confessions
  # POST /confessions.json
  def create
    @confession = Confession.new(confession_params)
    @confession.household_id = current_user.household.id


    respond_to do |format|
      if @confession.save
        format.html { redirect_to root_path}
        format.js
      else
        format.html { render action: 'new' }
        format.json { render json: @confession.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /confessions/1
  # PATCH/PUT /confessions/1.json
  def update
    respond_to do |format|
      if @confession.update(confession_params)
        format.html { redirect_to @confession, notice: 'Confession was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @confession.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /confessions/1
  # DELETE /confessions/1.json
  def destroy
    @confession.destroy
    respond_to do |format|
      format.html { redirect_to confessions_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_confession
      @confession = Confession.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def confession_params
      params.require(:confession).permit(:content)
    end
end
